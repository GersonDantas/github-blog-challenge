interface SearchFormProps {
  onSearch?: (query: string) => void
}

export function SearchForm({ onSearch }: SearchFormProps = {}) {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    const formData = new FormData(event.target as HTMLFormElement)
    const query = formData.get('query') as string
    onSearch?.(query)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="query" 
        placeholder="Search posts..."
      />
      <button type="submit">Search</button>
    </form>
  )
} 
