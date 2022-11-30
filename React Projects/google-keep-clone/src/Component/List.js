import '../Style/All.css';

const List = (props) => {
    return (<>
        <div className='listContainer'>
           {
            props.getList.map((data, index)=>{
                return(
                    <div className='card' key={index}>
                <div className='listtitle'>{data.title}</div>
                <div className='listContent'>{data.content}</div>
                <div className='listbuttonDiv'>
                    <button onClick={()=>props.dltBtn(index)} className='listbutton'>➖</button>
                </div>
            </div>
                
                );
            })
           } 
            {/* <div className='card'>
                <div className='listtitle'>Title</div>
                <div className='listContent'>content</div>
                <div className='listbuttonDiv'>
                    <button className='listbutton'>➖</button>
                </div>
            </div> */}
        </div>
    </>)
}

export default List;