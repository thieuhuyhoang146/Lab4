import * as React from "react"

function fetchUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({id: 1, name: "Adam"});
        }, 1000)
    })
}

function Ex11() {
    const [id, setId] = React.useState("loading...")
    const [name, setName] = React.useState("loading...")

    React.useEffect(() => {
        fetchUser().then((user) => {
            setId(user.id)
            setName(user.name)
        })
    })

    return (
        <>
            <h3 style={{color: "red"}}>Ex 1.1</h3>
            <p>ID: {id}</p>
            <p>Name: {name}</p>
        </>
    )

}

export default Ex11