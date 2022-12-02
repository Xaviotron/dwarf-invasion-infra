import { useParams } from "solid-start";

export default function MemberPage() {
    const { character_name } = useParams();
    return (
        <div>
            <h1>Member page {character_name}</h1>
        </div>
    );
}
