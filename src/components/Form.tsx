import { useForm } from 'react-hook-form'
import ErrorMessage from './ErrorMessage';

export default function Form() {



    interface ContactForm {
        subject: string;
        name: string;
        email: string;
        message: string
    }



    const initialValues = {
        subject: 'subject',
        name: '',
        email: '',
        message: '',
    }



    const { register, handleSubmit, reset, formState: { errors } } = useForm({ defaultValues: initialValues })

    const handleContact = async (formData: ContactForm) => {

        try {
            console.log(formData);
            reset();

        } catch (error) {
            console.error(error);

        }
    }

    console.log(errors)

    return (
        <form className="form" onSubmit={handleSubmit(handleContact)}>



            <legend>I'm interesting in:</legend>

            <div className="subject-buttons">
                <button className="button-subject">UX/UI Design</button>
                <button className="button-subject">Mobile Development</button>
                <button className="button-subject">Bussiness System</button>
                <button className="button-subject">Optimization</button>
                <button className="button-subject">Other</button>
            </div>

            <div className="input-item">
                <label htmlFor="name">Your Name:</label>
                <input
                    type="text"
                    id="name"
                    placeholder="Jhon Smith"
                    className="input-underline"
                    {...register('name', {
                        required: 'Name is required'
                    })}
                />
            </div>

            {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}

            <div className="input-item">
                <label htmlFor="email">Your email</label>
                <input
                    className="input-underline"
                    type="email"
                    id="email"
                    placeholder="example@gmail.com"
                    {...register('email', {
                        required: 'Email is required',
                        pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: "Invalid E-Mail",
                        }
                    })}
                />
            </div>
            {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}



            <div className="input-item">

                <label htmlFor="message">Your message:</label>
                <textarea
                    id="message"

                    {...register('message', {
                        required: 'Message is required',
                        min: {
                            message: '?essage must be more than 5 characters long',
                            value: 5
                        }
                    })}

                >
                </textarea>
            </div>
            {errors.message && <ErrorMessage>{errors.message.message}</ErrorMessage>}

            <input type="submit" value="Send message" className="button button-form" />



        </form>
    )
}
