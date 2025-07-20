const Students =(props)=>{
    return(
        <>
        <h1>Student name :{props.name}</h1>
        <h2>Student Roll no :{props.rno}</h2>
        <h2>Student class : {props.class}</h2>
        <h3>Student fees  :{props.fees}</h3>
        </>
    )
}
export default Students;