import React, { useState } from 'react';

const Form: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    bio: '',
    genero: '',
    receberNewsletter: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    let checkedValue: boolean | undefined = undefined;
    if (type === 'checkbox') {
      checkedValue = (e.target as HTMLInputElement).checked;
    }
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checkedValue : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="max-w-2xl mx-auto bg-purple-100 p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-purple-800">Formulário Completo</h1>
      <form onSubmit={handleSubmit} className="space-y-4 w-90 h-90vh">
        <div>
          <label htmlFor="nome" className="block font-medium text-purple-800">Nome:</label>
          <input type="text" id="nome" name="nome" value={formData.nome} onChange={handleChange} className="border border-purple-300 px-4 py-2 w-full" />
        </div>
        <div>
          <label htmlFor="email" className="block font-medium text-purple-800">E-mail:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="border border-purple-300 px-4 py-2 w-full" />
        </div>
        <div>
          <label htmlFor="senha" className="block font-medium text-purple-800">Senha:</label>
          <input type="password" id="senha" name="senha" value={formData.senha} onChange={handleChange} className="border border-purple-300 px-4 py-2 w-full" />
        </div>
        <div>
          <label htmlFor="bio" className="block font-medium text-purple-800">Biografia:</label>
          <textarea id="bio" name="bio" value={formData.bio} onChange={handleChange} className="border border-purple-300 px-4 py-2 w-full h-24"></textarea>
        </div>
        <div>
          <label htmlFor="genero" className="block font-medium text-purple-800">Gênero:</label>
          <select id="genero" name="genero" value={formData.genero} onChange={handleChange} className="border border-purple-300 px-4 py-2 w-full">
            <option value="">Selecione</option>
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
            <option value="outro">Outro</option>
          </select>
        </div>
        <div>
          <label htmlFor="receberNewsletter" className="inline-flex items-center font-medium text-purple-800">
            <input type="checkbox" id="receberNewsletter" name="receberNewsletter" checked={formData.receberNewsletter} onChange={handleChange} className="mr-2" />
            Receber newsletter
          </label>
        </div>
        <div>
          <button type="submit" className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700">Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
