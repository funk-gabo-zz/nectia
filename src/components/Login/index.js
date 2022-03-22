import { FormContainer, InputBox } from './style'

export const Login = () => {
    return (
        <>
            <FormContainer>
                <h3>Login</h3>
                <form>
                    <InputBox>
                        <input type='text' placeholder='user' />
                        <input type='password' placeholder='password' />
                        <button>Enter</button>
                    </InputBox>
                </form>
            </FormContainer>
        </>
    );
}