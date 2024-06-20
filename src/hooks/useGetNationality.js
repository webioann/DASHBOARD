import nations from "../data/nations"

const  useGetNationality = ( code ) => {
    // to translate nationality code ("FR") into nationality ("Franch")
    let currentNation = nations.find(nation => nation.code === code)
    let nationality = currentNation.nameEng

    return nationality
}

export default useGetNationality;