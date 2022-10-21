import React ,{ useState, useEffect} from "react";
import  Chart  from "react-apexcharts";
import Donneservice from '../../service/Donnes.service'

function Piechart()
{
  const [Data, setData]= useState([]);
  const [name, setname]= useState([]);


  useEffect( ()=>{
      const name=[];
      const data=[];
      const getdata= async()=>{
      const reqData= Donneservice.getlastData().then(response=>{setData((response.data.Donnes))});

      for(let i=0; i< reqData.length; i++)
      {
       //name.push(reqData[i]);
       data.push(parseInt(reqData[i].Donnees));
      }
      setData(sMarks);
      setname(name);
       //console.log(resData); 
      }

   getdata();

  },[]);
  // const [datas, setData] = useState();
  
  
  // useEffect(() => {
  //   const fetchData =  () =>{
  //     try {

  //       //setData(JSON.parse.response);
  //        console.log(data);
        
  //     } catch (error) {
  //       console.error(error.message);
  //     }
  //   }

  //   fetchData();
  // }, []);
    return(
        <React.Fragment>
            <div >
                <Chart 
                type="pie"
                width={400}
                height={400}

                series={ Data }                

                options={{
                         
                       noData:{text:"Empty Data"},                        
                      // colors:["#f90000","#f0f"],

                 }}
                >
                </Chart>
            </div>
        </React.Fragment>
    );
}
export default Piechart;
