import {useMemo, useState} from "react";

const UseMemoHooks = () => {

    const [ fruitArray, setFruitArray ] = useState("");
    const fruits = ["딸기","바나나","메론","수박","체리"];
    const [ vegetableArray, setVegetableArray ] = useState("");
    const vegetables = ["당근","오이","호박","버섯","연근"];
    const [count, setCount] = useState(0);

    const changeFruits = () => {
        setFruitArray([
            ...fruitArray,
            fruits[count]
        ]);
        setCount(count < fruits.length-1? count+1 : 0);
    }

    const changeVegetables = () => {
        setVegetableArray([
            ...vegetableArray,
            vegetables[count]
        ]);
        setCount(count < vegetables.length-1? count+1 : 0);
    }

    const getVegetableLength = () => {
        // 채소의 개수를 변경하지 않아도 실행되고 있음
        console.log( "rendering >> " + vegetableArray.toString() );
        return `${vegetableArray.length} 개`;
    }

    const memoVegetableLength = useMemo(() => {
        // vegetableArray 의 값이 변경될 때만 실행됨
        console.log( "memo hooks >> " + vegetableArray.toString() );
        return `${vegetableArray.length} 개`;
    }, [vegetableArray])



    return (
        <>
            <p>{ fruitArray }</p>
            <button onClick={changeFruits}>changeFruit</button>
            <p>{ vegetableArray }</p>
            <button onClick={changeVegetables}>changeVegetable</button>
            <p>채소의 갯수 : {getVegetableLength()}</p>
            <p>채소의 갯수 : {memoVegetableLength}</p>
        </>
    )

}

export default UseMemoHooks;