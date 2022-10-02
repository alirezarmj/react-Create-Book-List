import { Icon } from 'react-icons-kit'
import { trash } from 'react-icons-kit/fa/trash'


const View = ({books,deleteHandle}) => {
    return ( 
        <>
         {
                      books.map((book)=>{
                        return (
                          <tr key={book.number}>
                          <td>{book.number}</td>
                          <td>{book.title}</td>
                          <td>{book.author}</td>
                          <td onClick={()=>deleteHandle(book.number)}><Icon icon={trash} /></td>
                        </tr>
                        )
                      })
                    }

        
        </>
     );
}
 
export default View;