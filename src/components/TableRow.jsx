const Row = ({question,index}) => {

    const {area,question:text,user}=question


    const truncateText = (text) => {
        if (text.length > 30) {
          return text.slice(0,30) + '...'; // Agrega puntos suspensivos al final del texto truncado
        }
        return text;
      };

    return (
        <tr className={index %2!==0?'grey':""}>
        <td className='img-row'>
            <img className='img-table' src="/icons/example-icon.png" alt="" />
                <p className='table-p'>{truncateText(text)}</p>
                </td>
        <td>Área {area}</td>
        <td>Guilebaldo Vargas</td>
        <td className='actions'>
            <div className="actions-div">
            <div className='actions-edit'>
                <img src="/icons/edit-icon.png" alt="" />
            </div>
            <div className='actions-delete'>
                <img src="/icons/delete-icon.png" alt="" />  
            </div>
            </div>

        </td>
    </tr>


     );


}
export default Row