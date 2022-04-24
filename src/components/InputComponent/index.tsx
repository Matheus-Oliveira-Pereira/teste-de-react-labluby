import { Input, Container, Label } from './styles';
import ConfirmationIcon from '../../assets/confirmation.png';
import ErrorIcon from '../../assets/error.png';

interface InputGroupDemoProps{
  value: string;
  onChange: (e:any) => void;
  label: string;
  placeholder: string;
  error?: string;
  type: 'password' | 'email'
  id: string;
  success?: boolean;
}

//style={{width:`400px`}}
export const InputComponent: React.FC<InputGroupDemoProps> = ({ type , id  , value , error, label, onChange, placeholder , success,}) => {


  return (
    <Container>
      <Label htmlFor={ id }> { label } </Label>
      <Input
        error={!!error}
        success={!!success}
        type={type}
        value={value}
        id={id}
        onChange={
          (e:any) => onChange(e.target.value)
        }
        autoFocus
        placeholder={error || placeholder} 
      />
      {error && (<img src={ErrorIcon}/>)}
      {success && (<img src={ConfirmationIcon}/>)}
    </Container>
  );
}