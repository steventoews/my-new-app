export default function Page() {
  async function findISBN(formData: FormData) {
    'use server'
    
    const rawFormData = {
      isbn: formData.get('isbn'),
    }
    // mutate data
    console.log(rawFormData.isbn)
    // revalidate cache
  }
 
  return <form action={findISBN}>
    <input name='isbn' />
    <button type='submit'>Find ISBN</button>
  </form>
}