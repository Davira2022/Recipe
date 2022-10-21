import check from "./check.png"

function MyRecipyComponent({label, image, calories, ingredients, full}) {
    return (
        <div className="list">
            <div className="content">
                <h2>{label}</h2>
            </div>
                <div>
                    <img src = {image} alt = "food"/>
                </div>
                <div>
                    <ul>
                        {ingredients.map((ingredient, index) => (
                            <li key={index}>
                                <img src= {check} className="check" alt = "checkmark"/>
                                {ingredient}
                            </li>)
                        )}
                    </ul>
                </div>
                <div className="content">
                    <p>{calories.toFixed()} calories</p>
                    <p>See full recipe on: <a href={full} target="_blank" rel="noreferrer">show</a></p>
                </div>
        </div>
    )
}
export default MyRecipyComponent;