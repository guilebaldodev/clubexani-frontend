import {useState,useEffect} from 'react'
import {useNavigate,useLocation} from 'react-router-dom'
import Row from './TableRow'
import Loading from './Loading';
const QuestionTable = () => {
    const getFromUrl = (param,constant) => {

        const params = new URLSearchParams(location.search);
        if(constant===1)return Number(params.get(param)) || 1;
        console.log(params.get(param),param,"??")
        return params.get(param)||''
        
    };

    const navigate=useNavigate()
    const location=useLocation()
    
    const [searchQuery, setSearchQuery] = useState(getFromUrl('search'));
    const [areaFilter, setAreaFilter] = useState(getFromUrl('area'));
    const [userFilter, setUserFilter] = useState('');
    const [pageNumber, setPageNumber] = useState(getFromUrl('pageNumber',1));
    const [questions, setQuestions] = useState([]);
    const [isLoading,setIsLoading]=useState(false)

    const [input, setinput] = useState(getFromUrl('search')||'');
    const [nextButton, setNextButton] = useState(true);    
    const [prevButton, setPrevButton] = useState(true);    
    const [filters, setFilters] = useState(false);    

    const handlePreviusPage=()=>{
        if(pageNumber>1){
            setPageNumber(pageNumber-1)
        }
    }    
    const handleNextPage=()=>{
        setPageNumber(pageNumber+1)
    }


    useEffect(()=>{
        console.log(questions)
    },[questions])


    const handleSearch=(e)=>{

        console.log("search")
        if(e.key=='Enter')
        {
            setPageNumber(1)
            console.log('enter')
            setSearchQuery(input)
        }



    }


    useEffect(() => {
        console.log("hola?")
        if(isLoading) return;
        setIsLoading(true)
        const fetchQuestions = async () => {
            const apiUrl = 'http://localhost:5000/api/questions';
            const params = new URLSearchParams();

            if (searchQuery.trim() !== '') params.set('search', searchQuery);
            if (areaFilter.trim() !== '') params.set('area', areaFilter);
            if (userFilter.trim() !== '') params.set('user', userFilter);
            params.set('pageNumber', pageNumber);



            const url = `${apiUrl}?${params.toString()}`;

            try {
                const response = await fetch(url);
                const data = await response.json();
                console.log("data",data)
                setQuestions(data.questions);
                if(pageNumber==data.totalPages){
                    if(pageNumber==1){
                        setPrevButton(true)
                    }else{
                        setPrevButton(false)
                        
                    }
                    setNextButton(true)

                }else{
                    if(data.totalPages===0){
                        console.log("nada")
                        setNextButton(true)
                    }else{
                        if(pageNumber==1)setPrevButton(true)
                        setNextButton(false)

                    }
                }

            } catch (error) {
                console.error('Error al obtener las preguntas:', error);
            }finally{
                setIsLoading(false)
            }
        };

        fetchQuestions();
        navigate({
            pathname: '/panel-control/preguntas',
            search: `?${new URLSearchParams({
                search: searchQuery,
                area: areaFilter,
                user: userFilter,
                pageNumber,
            }).toString()}`
        });

    }, [searchQuery,areaFilter,pageNumber]);
   
    const handleAreaCheckBox=(e)=>{
        const selectedArea = e.target.value;

        // Si el checkbox seleccionado ya estaba marcado, desmárcalo
        if (selectedArea === areaFilter) {
            setAreaFilter('');
        } else {
            setPageNumber(1)
            setAreaFilter(selectedArea);
        }        
    }

   return (<>

        <div className="full-container ">
        <div className='table-container' >

            <div className="table-titles">
                <input value={input}  onChange={e=>setinput(e.target.value)} onKeyDown={handleSearch} type="text" placeholder='Buscar...' />
                <div onClick={()=>{
                    document.body.style.overflowY='hidden'
                    setFilters(true)
                    }} className="titles-icon">
                    <img src="/icons/filter-icon.png" alt="" />
                </div>
            </div>
            <table className='data-table'>
                <thead >
    
                    <tr className='padding'>
                        <th className='left'>Pregunta</th>
                        <th>Área</th>
                        <th>Autor</th>
                        <th className='actions'>Acciones</th>
                    </tr>
                </thead>
                <tbody>
            {isLoading && 
            <tr>
              
              <td  colSpan="4">
                
                    <div className="loading-container">
                    <Loading></Loading>
                    </div>
              </td>
            </tr>
             } 
            
            {!isLoading && questions.map((item,index)=>(<Row question={item} key={index} index={index}></Row>))}

                </tbody>
            </table>
            <div className="table-footer">
                <button disabled={prevButton} className='disabled' onClick={handlePreviusPage}>Atras</button>
                <button disabled={nextButton} onClick={handleNextPage}>Siguiente</button>
            </div>
            </div>
   

        </div>

        {filters && <div className=''>

                         <div   className="cortina"  onClick={()=>{
                            document.body.style.overflowY=''

                            setFilters(false)}
                            }>
                         </div>
    <div className="absolute">
    <div className="filter-container ">
    <div className="title">
        <p>Filtros</p>
        <img onClick={()=>{
            document.body.style.overflowY=''
            setFilters(false)}
            } src="/icons/exit-icon.png" alt="" />
    </div>
    <div className="filter-section">
        <div className="filter-title">Área</div>
        <div className="checkbox-group filter-area" >
            <label>
                <input  type="checkbox" checked={areaFilter==="1"} value="1"  onChange={handleAreaCheckBox}/>
                Área 1
            </label>
            <label>
                <input type="checkbox" checked={areaFilter==="2"} value="2"  onChange={handleAreaCheckBox}/>
                Área 2
            </label>
            <label>
                <input type="checkbox" checked={areaFilter==="3"} value="3" onChange={handleAreaCheckBox} />
                Área 3
            </label>
            <label>
                <input type="checkbox" checked={areaFilter==="4"} value="4" onChange={handleAreaCheckBox} />
                Área 4
            </label>
        </div>
    </div>
    <div className="filter-section ">
        <div className="filter-title">Autor</div>
        <div className="checkbox-group filter-area no-border">
            <label>
                <input type="checkbox" value="autor1" />
                Alexa
            </label>
            <label>
                <input type="checkbox" value="autor2" />
                Guilebaldo
            </label>
        </div>
    </div>

</div> 
            
</div>                     
            
            
            </div>
           
           
           
           
           }

    </>);
}
 
export default QuestionTable;