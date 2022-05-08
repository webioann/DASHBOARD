import nations from "../data/nations"

const  useGetNationality = ( code ) => {

    let currentNation = nations.find(nation => nation.code === code)
    let nationality = currentNation.nameEng

    return nationality
}
export default useGetNationality;