function Student(props: any){
    return(
        <h1>Hello {props.name}</h1>
    );
}

function Details(props:any){
    return(
        <div>
            <h2>{props.name}</h2>
            <p>{props.age}</p>
            <p>{props.city}</p>
        </div>
    );
}

function Props(){
    return(
        <div>
            <Student name="Vijay" />
            <Student name="Swathi" />

            <Details name="Dheeksa" age="1" city="Tirunelveli" />
        </div>
    );
}

export default Props;