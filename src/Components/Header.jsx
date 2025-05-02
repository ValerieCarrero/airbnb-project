
import Logoheader from "./Logoheader";
import Input from "./Input";
import Filter from "./Filter";

export default function Header() {
    return (
    <div className="header">
<Logoheader 
list1={"Experiences"}
list2={"Online Experiences"}

/>
<Input />
<Filter />
</div>
    )
}