import check from "./check.png"

function MyRecipyComponent({id, label, image, calories, ingredients, full}) {
    return (
        <div className="list" key={id}>
            <div className="content">
                <h2>{label}</h2>
            </div>
                <div>
                    <img src = {image} alt = "food"/>
                </div>
                <div>
                    <ul>
                        {ingredients.map(ingredient => (
                            <li>
                                <img src= {check} className="check" alt = "checkmark"/>
                                {ingredient}
                            </li>)
                        )}
                    </ul>
                </div>
                <div className="content">
                    <p>{calories.toFixed()} calories</p>
                    <p>See full recipe on: <href>{full}</href></p>
                </div>
        </div>
    )
}
export default MyRecipyComponent;