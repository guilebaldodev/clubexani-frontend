const AdminTable = () => {
    return ( <>
               <div className="admin-table">
              <table>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Tema</th>
                    <th>Tipo</th>
                    <th>Origen</th>
                    <th>Categoria</th>
                    <th>Asignado</th>
                    <th className="th-center"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>¿Que es el positivismo aplicada los ?</td>
                    <td>Html</td>
                    <td>Examen</td>
                    <td>Metodologia</td>
                    <td className="color-td red">
                      <span>Pendiente</span>
                    </td>
                    <td className="td-center">
                      <div className="container">
                        <img src="/icons/admin-icons/3points.png" alt="" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>¿Que es el positivismo?</td>
                    <td>Texto</td>
                    <td>Examen</td>
                    <td>Metodologia</td>
                    <td className="color-td green">
                      <span>Asignada</span>
                    </td>
                    <td>
                      <div className="container">
                        <img src="/icons/admin-icons/3points.png" alt="" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>¿Que es el positivismo?</td>
                    <td>html</td>
                    <td>Examen</td>
                    <td>Metodologia</td>
                    <td className="color-td green">
                      <span>Asignada</span>
                    </td>
                    <td>
                      <div className="container">
                        <img src="/icons/admin-icons/3points.png" alt="" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>¿Que es el positivismo?</td>
                    <td>Texto</td>
                    <td>Generada</td>
                    <td>Metodologia</td>
                    <td className="color-td green">
                      <span>Asignada</span>
                    </td>
                    <td>
                      <div className="container">
                        <img src="/icons/admin-icons/3points.png" alt="" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>¿Que es el positivismo?</td>
                    <td>Texto</td>
                    <td>Generada</td>
                    <td>Metodologia</td>
                    <td className="color-td green">
                      <span>Asignada</span>
                    </td>
                    <td>
                      <div className="container">
                        <img src="/icons/admin-icons/3points.png" alt="" />
                      </div>
                    </td>
                  </tr>
   

                </tbody>
              </table>
              <div className="admin-table-footer">
                <div className="admin-footer-left">
                  <p>Preguntas por pagina: 5</p>
                </div>
                <div className="admin-footer-right">
                  <p>1-5 de 20</p>
                  <div className="footer-button rotate">
                    <img src="/icons/admin-icons/arrow.png" alt="" />
                  </div>

                  <div className="footer-button ">
                    <img src="/icons/admin-icons/arrow.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
    
    </> );
}
 
export default AdminTable;