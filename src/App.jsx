import { MainBody ,Container} from './styles/Global.styled'
import { ThemeProvider} from 'styled-components';
import {theme} from './utils/Theme'

//import components
import ShowCase from './components/ShowCase';
function App() {
    return (
        <div className="App">
        <ThemeProvider theme={theme}>
           <MainBody>
            <Container>
               <ShowCase />
            </Container>
             </MainBody>
        </ThemeProvider>
        </div>
    )
}

export default App;