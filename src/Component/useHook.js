import { useState } from 'react'
const PeopleDefault =
{
    Id: "",
    FirstName: "",
    LastName: "",
    Gender: ""
}
const ErrorDefault = {
    FirstName: "",
    LastName: "",
    Gender: ""
}

const useHook = () => {
    const [people, setPeople] = useState(PeopleDefault)
    const [error, setError] = useState(ErrorDefault)
    const [lists, setList] = useState([])
    const [result, setResult] = useState(true)
    const handleName = (e, name) => {
        const PeopleClone = JSON.parse(JSON.stringify(people))
        const ErrorClone = JSON.parse(JSON.stringify(error))
        PeopleClone[name] = e.target.value
        e.target.value && (ErrorClone[name] == null)
        setError(ErrorClone)
        setPeople(PeopleClone)
    }
    const genId = () => {
        const listClone = JSON.parse(JSON.stringify(lists));
        const Id = Math.floor(Math.random() * 100);
        const check = listClone.find((x) => x.Id === Id);
        if (check) {
            genId();
        }
        return Id;
    };
    const submitListName = () => {
        people.Id = genId()
        setList(prev =>
            [...prev, people]
        )
        setPeople(error)
    }
    const deleteListName = (id) => {
        const listsClone = JSON.parse(JSON.stringify(lists));
        const indexUser = listsClone.findIndex((item) => item.Id === id);
        listsClone.splice(indexUser)
        setList(listsClone);
    };
    const fixListName = (id) => {
        const listClone = JSON.parse(JSON.stringify(lists));
        const peopleFix = listClone.find((x) => x.Id === id);
        setPeople(peopleFix)
        setResult(false)
    }
    const updateListName = () => {
        const peopleClone = JSON.parse(JSON.stringify(people));
        const listClone = JSON.parse(JSON.stringify(lists));
        const peopleUpdate = listClone.findIndex((item) => item.Id === peopleClone.Id);

        listClone[peopleUpdate] = { ...listClone[peopleUpdate], ...peopleClone };
        setList(listClone);
        setPeople(PeopleDefault);
        setResult(true);

    }
    return { people, handleName, lists, submitListName, deleteListName, fixListName, result,updateListName }


}

export default useHook 