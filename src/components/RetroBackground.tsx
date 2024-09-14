export default function RetroBackground() {
  return (
    <div className="fixed inset-0 z-[-1]">
      <div className="absolute inset-0 bg-gradient-to-t from-pink-600 via-purple-500 to-blue-900" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-t from-pink-500 to-transparent opacity-50 blur-3xl" />
    </div>
  )
}
