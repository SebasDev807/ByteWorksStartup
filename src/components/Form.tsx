export default function Form() {
    return (
        <form className="form">


            <legend>I'm interesting in:</legend>

            <div className="subject-buttons">
                <button>UX/UI Design</button>
                <button>Mobile Development</button>
                <button>Bussiness System</button>
                <button>Optimization</button>
                <button>Other</button>
            </div>

            <div className="input-item">
                <label htmlFor="name">Your Name:</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Jhon Smith"
                />
            </div>

            <div className="input-item">
                <label htmlFor="email">Your email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Jhon Smith"
                />
            </div>



            <div className="input-item">

                <label htmlFor="message">Your message:</label>
                <textarea id="message" name="message">


                </textarea>
            </div>

            <input type="submit" value="Send message" className="button button-form" />



        </form>
    )
}
