const TIMINGS_CONTENT = {
  heading: "Opening Hours",
  description:
    "We’re open every day to serve you hot, fresh, and flavorful biryani straight from the kitchen.",
  hours: [
    { day: "Monday - Friday", time: "11:00 AM – 10:30 PM" },
    { day: "Saturday", time: "11:00 AM – 11:00 PM" },
    { day: "Sunday", time: "12:00 PM – 10:00 PM" },
  ],
};

export default function TimingsSection() {
  return (
    <section className="bg-[#923d25] text-white py-16 px-6 sm:px-12 flex justify-center">
      <div className="max-w-3xl text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#FFD700] mb-6">
          {TIMINGS_CONTENT.heading}
        </h2>
        <p className="text-base sm:text-lg text-gray-100 mb-10">
          {TIMINGS_CONTENT.description}
        </p>

        <div className="space-y-4">
          {TIMINGS_CONTENT.hours.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-[#a9442a] bg-opacity-80 rounded-2xl shadow-md p-4 sm:p-5 backdrop-blur-md"
            >
              <span className="font-semibold text-gray-100">{item.day}</span>
              <span className="text-[#FFD700] font-bold">{item.time}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
