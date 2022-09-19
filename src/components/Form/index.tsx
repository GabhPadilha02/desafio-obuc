import { Button, Checkbox, FormLabel, InputAdornment, MenuItem, OutlinedInput, Select, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useApp } from "../../context/AppContext";
import style from '../Form/styles.module.scss'

export function Form() {

  const { } = useApp()
  const { control, handleSubmit, resetField } = useForm()
  const onSubmit = (data: any) => console.log(data);
  const handleReset = () => resetField();

  return (
    <div className={style.container}>
      <form
        className={style.formContainer}
      >
        <h1>CRIE UMA NOVA VAGA</h1>
        <div className={style.displayForm}>
          <div className={style.formItem}>
            <FormLabel className={style.fontBold} id="nameOfJob">Nome da função:</FormLabel>
            <Controller
              name={"nameOfJob"}
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextField
                  onChange={onChange}
                  value={value}
                  label={"Nome da função"}
                  variant="outlined"
                  sx={
                    { width: 300 }
                  }
                />
              )}
            />
          </div>
          <div className={style.formItem}>
            <FormLabel className={style.fontBold} id="locale">Localidade:</FormLabel>
            <Controller
              control={control}
              name={"locale"}
              render={({ field: { onChange, value } }) => (
                <Select
                  onChange={onChange}
                  value={value}
                  labelId="locale"
                  id="locale"
                  sx={
                    { width: 300 }
                  }
                >
                  <MenuItem value={"Uberlândia"}>Uberlândia, MG</MenuItem>
                  <MenuItem value={"Curitiba"}>Curitiba, PR</MenuItem>
                  <MenuItem value={"São Paulo"}>São Paulo, SP</MenuItem>
                </Select>
              )}
            />

          </div>
        </div>
        <div className={style.displayForm}>
          <div className={style.formItem}>
            <FormLabel className={style.fontBold} htmlFor="outlined-adornment-amount">Salário:</FormLabel>
            <Controller
              name={"salary"}
              control={control}
              render={({ field: { onChange, value } }) => (
                <OutlinedInput
                  onChange={onChange}
                  startAdornment={<InputAdornment position="start">$</InputAdornment>}
                  type="number"
                  value={value}
                  label={"Salário"}
                  sx={
                    { width: 300 }
                  }
                />
              )}
            />

          </div>
          <div className={style.formItem}>
            <FormLabel className={style.fontBold} id="typeOfJob">Tipo de trabalho:</FormLabel>
            <Controller
              control={control}
              name={"typeOfJob"}
              render={({ field: { onChange, value } }) => (
                <Select
                  value={value}
                  onChange={onChange}
                  labelId="typeOfJob"
                  id="typeOfJob"
                  sx={
                    { width: 300 }
                  }
                >
                  <MenuItem value={"remoto"}>Remoto</MenuItem>
                  <MenuItem value={"hibrido"}>Híbrido</MenuItem>
                  <MenuItem value={"presencial"}>Presencial</MenuItem>
                </Select>
              )}
            />
          </div>
        </div>
        <div className={style.line}></div>
        <div className={style.displayForm}>
          <div className={style.lineBreak}>
            <div className={style.formItem}>
              <FormLabel className={style.fontBold} id="typeOfInterview">Entrevista:</FormLabel>
              <Controller
                control={control}
                name={"typeOfInterview"}
                render={({ field: { onChange, value } }) => (
                  <Select
                    value={value}
                    onChange={onChange}
                    labelId="typeOfInterview"
                    id="typeOfInterview"
                    sx={
                      { width: 300 }
                    }
                  >
                    <MenuItem value={"remoto"}>Remoto</MenuItem>
                    <MenuItem value={"presencial"}>Presencial</MenuItem>
                  </Select>
                )}
              />
            </div>
            <div className={style.formItemCheckbox}>
              <FormLabel className={style.fontBold}>Etapas do processo:</FormLabel>
              <div className={style.checkboxDisplay}>
                <div className={style.checkboxItem}>
                  <FormLabel id="resumeSending">Envio de currículo</FormLabel>
                  <Controller
                    control={control}
                    name="resumeSending"
                    render={({
                      field: { onChange, onBlur, value, name, ref },
                    }) => (
                      <Checkbox
                        name={"resumeSending"}
                        onBlur={onBlur} // notify when input is touched
                        onChange={onChange} // send value to hook form
                        checked={value}
                        inputRef={ref}
                      />
                    )}
                  />
                </div>
                <div className={style.checkboxItem}>
                  <FormLabel id="preInterview">Pré-Entrevista</FormLabel>
                  <Controller
                    control={control}
                    name="preInterview"
                    render={({
                      field: { onChange, onBlur, value, name, ref },
                    }) => (
                      <Checkbox
                        name={"preInterview"}
                        onBlur={onBlur} // notify when input is touched
                        onChange={onChange} // send value to hook form
                        checked={value}
                        inputRef={ref}
                      />
                    )}
                  />
                </div>
                <div className={style.checkboxItem}>
                  <FormLabel id="technicalTest">Teste Técnico</FormLabel>
                  <Controller
                    control={control}
                    name="technicalTest"
                    render={({
                      field: { onChange, onBlur, value, name, ref },
                    }) => (
                      <Checkbox
                        name={"technicalTest"}
                        onBlur={onBlur} // notify when input is touched
                        onChange={onChange} // send value to hook form
                        checked={value}
                        inputRef={ref}
                      />
                    )}
                  />
                </div>
                <div className={style.checkboxItem}>
                  <FormLabel id="finalInterview">Entrevista Final</FormLabel>
                  <Controller
                    control={control}
                    name="finalInterview"
                    render={({
                      field: { onChange, onBlur, value, name, ref },
                    }) => (
                      <Checkbox
                        name={"finalInterview"}
                        onBlur={onBlur} // notify when input is touched
                        onChange={onChange} // send value to hook form
                        checked={value}
                        inputRef={ref}
                      />
                    )}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={style.displayTextarea}>
            <div className={style.formItemTextarea}>
              <FormLabel id="activities" className={style.fontBold}>Atividades:</FormLabel>
              <Controller
                name={"activities"}
                control={control}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    id="activities"
                    multiline
                    minRows={4}
                    maxRows={4}
                    sx={{
                      width: 300
                    }}
                    value={value}
                    onChange={onChange}
                  />
                )}
              />
            </div>
            <div className={style.displayForm}>
              <div className={style.formItemTextarea}>
                <FormLabel id="necessarySkills" className={style.fontBold}>Habilidades:</FormLabel>
                <Controller
                  name={"necessarySkills"}
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      id="necessarySkills"
                      multiline
                      minRows={4}
                      maxRows={4}
                      sx={{
                        width: 300
                      }}
                      value={value}
                      onChange={onChange}
                    />
                  )}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={style.displayForm}>
          <div className={style.formItem}>
            <div className={style.formItemTextarea}>
              <FormLabel id="benefits" className={style.fontBold}>Benefícios:</FormLabel>
              <Controller
                name={"benefits"}
                control={control}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    id="benefits"
                    multiline
                    minRows={4}
                    maxRows={4}
                    sx={{
                      width: 300
                    }}
                    value={value}
                    onChange={onChange}
                  />
                )}
              />
            </div>
          </div>
          <div className={style.formItem}>
            <div className={style.formItemTextarea}>
              <FormLabel id="differentials" className={style.fontBold}>Diferenciais:</FormLabel>
              <Controller
                name={"differentials"}
                control={control}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    id="differentials"
                    multiline
                    minRows={4}
                    maxRows={4}
                    sx={{
                      width: 300
                    }}
                    value={value}
                    onChange={onChange}
                  />
                )}
              />
            </div>
          </div>
        </div>
        <div className={style.displayForm}>
          <div className={style.formItem}>
            <FormLabel className={style.fontBold} id="experience">Experiência:</FormLabel>

            <Controller
              control={control}
              name={"experience"}
              render={({ field: { onChange, value } }) => (
                <Select
                  value={value}
                  onChange={onChange}
                  labelId="experience"
                  id="experience"
                  sx={
                    { width: 300 }
                  }
                >
                  <MenuItem value={"Junior"}>Junior</MenuItem>
                  <MenuItem value={"Pleno"}>Pleno</MenuItem>
                  <MenuItem value={"Senior"}>Senior</MenuItem>
                </Select>
              )}
            />
          </div>
          <div className={style.formItem}>
            <FormLabel className={style.fontBold} id="schooling">Escolaridade:</FormLabel>

            <Controller
              control={control}
              name={"schooling"}
              render={({ field: { onChange, value } }) => (
                <Select
                  value={value}
                  onChange={onChange}
                  labelId="schooling"
                  id="schooling"
                  sx={
                    { width: 300 }
                  }
                >
                  <MenuItem value={"Nível Fundamental"}>Nível Fundamental</MenuItem>
                  <MenuItem value={"Nível Médio"}>Nível Médio</MenuItem>
                  <MenuItem value={"Nível Técnico"}>Nível Técnico</MenuItem>
                  <MenuItem value={"Nível Superior"}>Nível Superior</MenuItem>
                </Select>
              )}
            />
          </div>
        </div>
        <Button
          variant="contained"
          sx={{
            marginTop: "2rem",
            backgroundColor: "#7DF489",
            height: 50,
            "&:hover": {
              backgroundColor: "#42ce50"
            }
          }}
          onClick={handleSubmit(onSubmit)}
          type="submit"
        >
          CRIAR VAGA</Button>
        {/* <Button 
          variant="contained" 
          sx={{
          backgroundColor: "#F47D7D",
          height: 50,
          "&:hover": {
            backgroundColor: "#bd4848"
          }
          }}
          type="button" 
        onClick={handleReset}
        >
          LIMPAR FORMULÁRIO</Button> */}
      </form>
    </div>
  )
}   