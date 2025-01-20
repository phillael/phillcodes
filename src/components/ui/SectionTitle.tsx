type SectionTitleProps = {
  children: React.ReactNode
}

const SectionTitle = ({ children }: SectionTitleProps) => {
  return <h2 className="mb-8 neon-text-purple">{children}</h2>
}

export default SectionTitle
