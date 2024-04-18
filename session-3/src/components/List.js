function List(){
    const arr = ["HTML", "CSS", "JS"];
    // you don't have to use join() after
    let lis = arr.map(ele => (
        <li>{ele}</li>
    ));
    return (
        <ul>
            {lis}
        </ul>
    )
}

export default List;