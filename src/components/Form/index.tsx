import { Button, Checkbox, createTheme, FormControl, FormLabel, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, TextareaAutosize, TextField } from "@mui/material";
import { palette } from "@mui/system";
import style from '../Form/styles.module.scss'

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: React.CSSProperties['color'];
    };
  }

  interface Palette {
    neutral: Palette['primary'];
  }
  interface PaletteOptions {
    neutral: PaletteOptions['primary'];
  }

  interface PaletteColor {
    darker?: string;
  }
  interface SimplePaletteColorOptions {
    darker?: string;
  }
  interface ThemeOptions {
    status: {
      danger: React.CSSProperties['color'];
    };
  }
}

export function Form() {
  const theme = createTheme({
    status: {
      danger: '#e53e3e',
    },
    palette: {
      primary: {
        main: '#7DF489',
        darker: '#2E7D36',
      },
      neutral: {
        main: '#64748B',
        contrastText: '#fff',
      },
    },
  });
  return (
    <div className={style.container}>
      <FormControl className={style.formContainer}>
        <h1>CRIE UMA NOVA VAGA</h1>
        <div className={style.displayForm}>
          <div className={style.formItem}>
            <FormLabel className={style.fontBold} id="nameOfJob">Nome da função:</FormLabel>
            <TextField
              id="nameOfJob"
              label="Nome da função"
              variant="outlined"
              sx={
                { width: 300 }
              }
            />
          </div>
          <div className={style.formItem}>
            <FormLabel className={style.fontBold} id="locale">Localidade:</FormLabel>
            <Select
              labelId="locale"
              id="locale"
              sx={
                { width: 300 }
              }
            >
              <MenuItem value={"uberlandia"}>Uberlândia, MG</MenuItem>
              <MenuItem value={"curitiba"}>Curitiba, PR</MenuItem>
              <MenuItem value={"sao-paulo"}>São Paulo, SP</MenuItem>
            </Select>
          </div>
        </div>
        <div className={style.displayForm}>
          <div className={style.formItem}>
            <FormLabel className={style.fontBold} htmlFor="outlined-adornment-amount">Salário:</FormLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              startAdornment={<InputAdornment position="start">$</InputAdornment>}
              sx={
                { width: 300 }
              }
            />
          </div>
          <div className={style.formItem}>
            <FormLabel className={style.fontBold} id="typeOfJob">Tipo de trabalho:</FormLabel>
            <Select
              labelId="locale"
              id="locale"
              sx={
                { width: 300 }
              }
            >
              <MenuItem value={"remoto"}>Remoto</MenuItem>
              <MenuItem value={"hibrido"}>Híbrido</MenuItem>
              <MenuItem value={"presencial"}>Presencial</MenuItem>
            </Select>
          </div>
        </div>
        <div className={style.line}></div>
        <div className={style.displayForm}>
          <div className={style.lineBreak}>
            <div className={style.formItem}>
              <FormLabel className={style.fontBold} id="typeOfJob">Entrevista:</FormLabel>
              <Select
                labelId="locale"
                id="locale"
                sx={
                  { width: 300 }
                }
              >
                <MenuItem value={"remoto"}>Remoto</MenuItem>
                <MenuItem value={"presencial"}>Presencial</MenuItem>
              </Select>
            </div>

            <div className={style.formItemCheckbox}>
              <FormLabel className={style.fontBold}>Etapas do processo:</FormLabel>
              <div className={style.checkboxDisplay}>
                <div className={style.checkboxItem}>
                  <FormLabel id="resumeSending">Envio de currículo</FormLabel>
                  <Checkbox id="resumeSending" />
                </div>
                <div className={style.checkboxItem}>
                  <FormLabel id="preInterview">Pré-Entrevista</FormLabel>
                  <Checkbox id="preInterview" />
                </div>
                <div className={style.checkboxItem}>
                  <FormLabel id="technicalTest">Teste Técnico</FormLabel>
                  <Checkbox id="technicalTest" />
                </div>
                <div className={style.checkboxItem}>
                  <FormLabel id="finalInterview">Entrevista Final</FormLabel>
                  <Checkbox id="finalInterview" />
                </div>
              </div>
            </div>
          </div>
          <div className={style.displayTextarea}>
            <div className={style.formItemTextarea}>
              <FormLabel id="activities" className={style.fontBold}>Atividades:</FormLabel>
              <TextField id="activities" multiline minRows={4} sx={{
                width: 300
              }} />
            </div>
            <div className={style.displayForm}>
              <div className={style.formItemTextarea}>
                <FormLabel id="necessarySkills" className={style.fontBold}>Habilidades:</FormLabel>
                <TextField id="necessarySkills" multiline minRows={4} sx={{
                  width: 300
                }} />
              </div>
            </div>
          </div>
        </div>
        <div className={style.displayForm}>
          <div className={style.formItem}>
            <div className={style.formItemTextarea}>
              <FormLabel id="benefits" className={style.fontBold}>Benefícios:</FormLabel>
              <TextField id="benefits" multiline minRows={4} sx={{
                width: 300
              }} />
            </div>
          </div>
          <div className={style.formItem}>
            <div className={style.formItemTextarea}>
              <FormLabel id="differentials" className={style.fontBold}>Diferenciais:</FormLabel>
              <TextField id="differentials" multiline minRows={4} sx={{
                width: 300
              }} />
            </div>
          </div>
        </div>
        <div className={style.displayForm}>
          <div className={style.formItem}>
            <FormLabel className={style.fontBold} id="experience">Experiência:</FormLabel>
            <Select
              labelId="experience"
              id="experience"
              sx={
                { width: 300 }
              }
            >
              <MenuItem value={"junior"}>Junior</MenuItem>
              <MenuItem value={"pleno"}>Pleno</MenuItem>
              <MenuItem value={"senior"}>Senior</MenuItem>
            </Select>
          </div>
          <div className={style.formItem}>
            <FormLabel className={style.fontBold} id="schooling">Escolaridade:</FormLabel>
            <Select
              labelId="schooling"
              id="schooling"
              sx={
                { width: 300 }
              }
            >
              <MenuItem value={"fundamental"}>Nível Fundamental</MenuItem>
              <MenuItem value={"medio"}>Nível Médio</MenuItem>
              <MenuItem value={"tecnico"}>Nível Técnico</MenuItem>
              <MenuItem value={"superior"}>Nível Superior</MenuItem>
            </Select>
          </div>
        </div>
        <Button variant="contained" sx={{
          marginTop: "2rem",
          backgroundColor:"#7DF489",
          height:50,
          "&:hover": {
            backgroundColor:"#42ce50"
          }
        }}>CRIAR VAGA</Button>
        <Button variant="contained" sx={{
          backgroundColor:"#F47D7D",
          height:50,
          "&:hover": {
            backgroundColor:"#bd4848"
          }
        }}>LIMPAR FORMULÁRIO</Button>
      </FormControl>
    </div>
  )
}   