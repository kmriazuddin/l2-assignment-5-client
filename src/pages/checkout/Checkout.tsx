/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useGetSingleRoomQuery } from "@/redux/features/admin/roomManagementApi";
import { useAddBookingsMutation } from "@/redux/features/booking/bookingManagementApi";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { authApi } from "@/redux/features/auth/authApi";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { IoIosTime } from "react-icons/io";
import { BsFillCalendar2DateFill } from "react-icons/bs";
import { useGetAllSlotsAvailabilityQuery } from "@/redux/features/admin/slotManagementApi";
import { clearBookingData } from "@/redux/features/booking/bookingSlice";
import { useState } from "react";
import SectionTitle from "@/components/ui/SectionTitle";

type Slot = {
  startTime: string;
  endTime: string;
};

const Checkout = () => {
  const bookedData = useAppSelector((state) => state.booking);
  const [openDialog, setOpenDialog] = useState(false);
  const [addBooking] = useAddBookingsMutation();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);
  const { data: userData } = authApi.useGetUserByEmailQuery(user?.email);
  const roomId = bookedData?.bookingData?.room;
  const { data: singleRoom, isLoading } = useGetSingleRoomQuery(roomId);

  //  available slots
  const { data: slotData, isLoading: isSlotLoading } =
    useGetAllSlotsAvailabilityQuery({
      date: bookedData?.bookingData?.date,
      roomId,
    });

  if (isSlotLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-pink-500"></div>
      </div>
    );
  }

  // Filter and map the data
  const availableSlots = slotData?.data.filter((room: any) => !room.isBooked);

  const bookedSlots = availableSlots
    ?.filter((slot: any) => bookedData?.bookingData?.slots?.includes(slot._id))
    .map((slot: any) => ({
      startTime: slot.startTime,
      endTime: slot.endTime,
    }));

  const bookingDate = bookedData?.bookingData?.date || "";

  const handleConfirmBooking = async () => {
    try {
      const data = bookedData?.bookingData;
      const res = await addBooking(data).unwrap();
      if (res?.success) {
        setOpenDialog(true);
      }
    } catch (error) {
      console.error("Booking failed:", error);
    }
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    dispatch(clearBookingData());
  };

  const totalCost =
    // @ts-expect-error: Unreachable code error
    bookedData?.bookingData?.slots?.length *
    (singleRoom?.data.pricePerSlot || 0);

  return (
    <div className="container mx-auto px-4 py-8">
      {bookedData?.bookingData ? (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <SectionTitle
            subHeading="Booking Process"
            sectionImg="https://i.ibb.co/SdK0n79/section-title-vector.png"
          />
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <div>
              <div className="flex justify-center mx-auto">
                <img
                  src={singleRoom?.data.image[0]}
                  alt={singleRoom?.data.name}
                  className="w-ful h-full md:w-10/12 md:h-[500px] rounded-lg mb-4"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2">
                <p className="font-medium text-slate-500">
                  Name: {singleRoom?.data.name}
                </p>
                <p className="flex items-center gap-2">
                  <BsFillCalendar2DateFill className="text-xl text-slate-500" />{" "}
                  {bookedData?.bookingData?.date}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 mt-3">
                <p className="flex items-center gap-2">
                  <IoIosTime className="text-2xl text-slate-500" />{" "}
                  <h2>Time:</h2>{" "}
                  {bookedSlots?.map((slot: Slot, index: number) => (
                    <span key={index}>
                      {slot.startTime} - {slot.endTime}
                      {index < bookedSlots?.length - 1 ? " & " : ""}
                    </span>
                  ))}
                </p>

                <div>
                  <p className="font-medium flex items-center gap-2 text-slate-500">
                    <FaRegMoneyBillAlt className="text-2xl text-slate-500" />
                    Per Slot: ${singleRoom?.data.pricePerSlot}
                  </p>
                  <p className="font-medium flex items-center gap-2 text-slate-500">
                    <FaRegMoneyBillAlt className="text-2xl text-slate-500" />
                    Total Cost: ${totalCost}
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 mt-2">
            <div className="bg-slate-300 md:w-6/12 p-2 mt-5 rounded-lg mb-4">
              <p>
                <strong>Payment Method:</strong>
              </p>
              <select className="border mt-2 p-2 rounded-lg w-full">
                <option value="cod">Cash on Delivery</option>
              </select>
            </div>
            {userData ? (
              <div className="bg-slate-300 p-4 rounded-lg">
                <p>
                  <strong>Name:</strong> {userData.data.name}
                </p>
                <p>
                  <strong>Email:</strong> {userData.data.email}
                </p>
                <p>
                  <strong>Phone:</strong> {userData.data.phone}
                </p>
                <p>
                  <strong>Address:</strong> {userData.data.address}
                </p>
              </div>
            ) : (
              <p className="text-gray-500">User information not available.</p>
            )}
          </div>
          <div className="flex justify-end">
            <button
              onClick={handleConfirmBooking}
              className="bg-cyan-500 mt-5 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-pink-500 transition"
            >
              Confirm Booking
            </button>
          </div>
        </div>
      ) : (
        <h2 className="text-3xl mt-5 mb-2 font-medium tracking-wider text-center">
          There is no booking
        </h2>
      )}

      {/* Shadcn UI Dialog */}
      <Dialog open={openDialog} onOpenChange={() => setOpenDialog(false)}>
        <DialogContent>
          <p>
            Your slot is successfully booked on{" "}
            {bookedSlots?.length > 1 ? "s" : ""}
            {bookingDate} at{" "}
            {bookedSlots.map((slot: Slot, index: number) => (
              <span key={index}>
                {slot.startTime} - {slot.endTime}
                {index < bookedSlots?.length - 1 ? ", " : ""}
              </span>
            ))}{" "}
            for {singleRoom?.data.name} . Thank you for choosing us!
            <br />
            <button
              className="px-3 mt-1 bg-cyan-500 hover:bg-pink-500 text-white py-1 rounded-2xl"
              onClick={handleCloseDialog}
            >
              Close
            </button>
          </p>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Checkout;
