import React from 'react'


const User = () => {
    const arr = [1,2,3]
  return (
    <div>
        <div>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>user id</th>
                      
                        <th>name</th>
                        <th>role</th>
                        <th>since</th>
                    </tr>
                </thead>
                <tbody>
              
                       {
                        arr.map((i=>(
                            <tr>
                            <td>{'jdhgfh'}</td>
                            <td>Adnan</td>
                            <td>Admin</td>
                            <td>22-05-1997</td>
                            
                            </tr>
                        )))
                       }
                    
                </tbody>
            </table>
        </div>
    </div>
    </div>
  )
}

export default User