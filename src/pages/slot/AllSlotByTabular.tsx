/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { FaPenToSquare } from "react-icons/fa6";
import { useState } from "react";
import swal from "sweetalert";
import UpdateSlot from "./UpdateSlot";
import CreateSlot from "./CreateSlot";
import { useGetAllSlotsQuery } from "@/redux/features/booking/bookingManagementApi";
import { useDeleteSlotMutation } from "@/redux/features/admin/slotManagementApi";

const AllSlotByTabular = () => {
  const [selectedSlotId, setSelectedSlotId] = useState(null);
  const { data, isLoading } = useGetAllSlotsQuery(undefined);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  const [deleteSlot] = useDeleteSlotMutation();
  const [alertShown, setAlertShown] = useState(false);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-pink-500"></div>
      </div>
    );
  }

  const handleUpdate = (slotId: any) => {
    setSelectedSlotId(slotId);
    setIsDialogOpen(true);
  };

  const handleAdd = () => {
    setCreateDialogOpen(true);
  };

  function handleDelete(id: string, booked: boolean) {
    //deleted slot will not be delete twice
    if (booked && !alertShown) {
      swal({
        title: "Delete Failed",
        text: "You can't delete this slot as it has already been booked.",
        icon: "error",
        //@ts-expect-error :'buttons' is generated error
        buttons: "Okay",
      }).then(() => {
        setAlertShown(false);
      });
      setAlertShown(true);
      return;
    }

    swal({
      title: "Are you sure to delete?",
      text: "Once deleted, you will not be able to recover this slot!",
      icon: "warning",
      // @ts-expect-error: Unreachable code error
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        deleteSlot({ rId: id })
          .then((response: any) => {
            if (response?.data) {
              swal("Deleted!", "The slot has been deleted.", "success");
            } else {
              swal("Error", "There was a problem deleting the slot.", "error");
            }
          })
          .catch((error) => {
            console.error("Delete error:", error);
            swal("Error", "There was a problem deleting the slot.", "error");
          });
      } else {
        swal("Cancelled", "The slot is safe!", "info");
      }
    });
  }

  return (
    <div>
      <div className="flex justify-start">
        <button
          type="submit"
          onClick={() => handleAdd()}
          className="btn btn-primary text-lg px-4 mt-4 py-2 bg-cyan-500 text-white font-medium rounded-md hover:bg-pink-500"
        >
          Add Slot
        </button>
      </div>
      <Table className="mt-12">
        <TableHeader>
          <TableRow className="border-2 border-cyan-500">
            <TableHead className="text-slate-500 font-medium text-base">
              Room Name
            </TableHead>
            <TableHead className="text-slate-500 font-medium text-base">
              Start Time
            </TableHead>
            <TableHead className="text-slate-500 font-medium text-base">
              End Time
            </TableHead>
            <TableHead className="text-slate-500 font-medium text-base">
              Date
            </TableHead>

            <TableHead className="text-slate-500 font-medium text-left text-base">
              Booked
            </TableHead>
            <TableHead className="text-slate-500 font-medium text-base">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data?.map((slot: any) => (
            <TableRow key={slot._id}>
              <TableCell>{slot?.room?.name}</TableCell>
              <TableCell>{slot?.startTime}</TableCell>
              <TableCell>{slot?.endTime}</TableCell>
              <TableCell>{new Date(slot?.date).toLocaleDateString()}</TableCell>
              <TableCell>{slot.isBooked ? "Yes" : "No"}</TableCell>
              <TableCell>
                <button
                  onClick={() => handleUpdate(slot?._id)}
                  className="mr-2"
                >
                  <FaPenToSquare className="text-green-500 text-xl md:text-4xl" />
                </button>
                <button onClick={() => handleDelete(slot?._id, slot.isBooked)}>
                  <RiDeleteBack2Fill className="text-red-600 text-xl md:text-4xl" />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {isDialogOpen && (
        <UpdateSlot
          isDialogOpen={isDialogOpen}
          setIsDialogOpen={setIsDialogOpen}
          slotId={selectedSlotId}
        />
      )}

      {createDialogOpen && (
        <CreateSlot
          isDialogOpen={createDialogOpen}
          setIsDialogOpen={setCreateDialogOpen}
        />
      )}
    </div>
  );
};

export default AllSlotByTabular;
