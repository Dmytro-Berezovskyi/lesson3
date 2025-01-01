import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHotels } from "../../store/thunks/hotelsThunk";

import HotelsItem from "./HotelsItem";
import HotelsGrid from "./HotelsGrid";
import {Divider, Pagination} from "antd";

export default function Hotels() {
    const hotels = useSelector((state) => state.hotels)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchHotels());
    },[dispatch])
    console.log(hotels);
    return (
        <>
            <Divider orientation="left"><h1>Hotels</h1></Divider>
            <HotelsItem />
            <Pagination align="center" defaultCurrent={1} total={5} />
        </>
    )
}

//{hotels.map((hotel) => (<HotelsItem key={hotel.id} hotel={hotel} />))}