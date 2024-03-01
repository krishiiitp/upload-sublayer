export default function UserProfile({params} : any){
    return(
        <div className="display-flex text-center mt-20">
            <h1 className="text-4xl">Hello <span className="p-1 rounded bg-orange-500 text-black">{params.id}</span></h1>
        </div>
    )
}