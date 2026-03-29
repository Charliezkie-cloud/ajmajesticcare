export default function GoogleMap() {
  return (
    <div style={{ position: "relative", width: "100%", paddingBottom: "56.25%", height: "100%" }}>
      <iframe
        className="rounded-2xl shadow-xl"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.844584145339!2d-74.40539602349828!3d40.69942037139559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3afff5753ffff%3A0x5a688c8fd0e557c2!2sA%20%26%20J%20Majestic%20Care%2C%20LLC!5e0!3m2!1sen!2sph!4v1774801251018!5m2!1sen!2sph"
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}