export default function Footer() {
  return (
    <footer className="bg-[#F4F4F1] py-6 border-t border-t-gray-200">
      <p className="text-gray-400 text-sm text-center">
        &copy; {new Date().getFullYear()} A & J Majestic Care. All rights reserved.
      </p>
    </footer>
  )
}