import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '~/components/Input';
import PrimaryButton from '~/components/PrimaryButton';
import handleJoinEntity from '~/utils/handleJoinEntity';
import handleInput from '~/utils/validator';

function JoinEntity({ setToken, setEntity }) {
  // Set document title
  document.title = 'Join Entity';

  const navigate = useNavigate();

  const [entityCode, setEntityCode] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    setError('');
  }, [entityCode]);

  const handleSubmit = async () => {
    const entityCodeError = handleInput(entityCode, 'required', 'entityCode');

    setError(entityCodeError);

    if (entityCodeError === undefined) {
      const res = await handleJoinEntity(entityCode);

      if (res) {
        navigate('/');
      }
    }
  };

  return (
    <div className="flex flex-col gap-8 py-9">
      <Input
        label="Legal Entity Code"
        onChange={(ev) => setEntityCode(ev.target.value)}
        id="entity"
        type="text"
        value={entityCode}
        error={error}
      />
      <PrimaryButton onClick={handleSubmit}>Create a Legal Entity</PrimaryButton>
    </div>
  );
}

export default JoinEntity;
