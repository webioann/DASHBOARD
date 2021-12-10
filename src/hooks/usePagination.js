const usePagination = ( data,usersOnPage,currentPage) => {

    let end = currentPage * usersOnPage
    let start = end - usersOnPage
    let slicedData = data.slice(start,end)

    return slicedData
}
export default usePagination;

