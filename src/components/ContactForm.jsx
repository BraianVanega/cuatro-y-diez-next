"use client";

import React, { useState} from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name:"",
        email:"",
        phone:"",
        message:"",
    });

    const [sending, setSending] = useState(false);

    const handleChange = (e) =>{
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e) =>{
        e.preventDefault();


        console.log ("Datos del formulario", formData);
        alert("Formulario enviado (modo prueba) ✅");

        setSending(true);
        setTimeout(() => {
            setSending(false);

            setFormData({
                name:"",
                email:"",
                phone:"",
                message:"",
                terms: false,
            });
            
        }, 1000);
    }

    return (
        <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-50 to-blue-200">
            <form 
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-2xl shadow-2xl border border-white/30 w-full max-w-lg space-y-5 hover:shadow-3xl transition-shadow duration-300">
                <h2 className="text-2xl font-bold text-center text-gray-800">
                    Formulario de Contacto
                </h2>


                <input 
                type="text"
                name="name"
                placeholder="Nombre Completo"
                value={formData.name} 
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-300 placeholder-gray-500 bg-white text-gray-800"
                />


                    
                <input
                type="email"
                name="email"
                placeholder="Correo electrónico"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-300 placeholder-gray-500 bg-white text-gray-800"
                />

                <input
                type="tel"
                name="phone"
                placeholder="Teléfono"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-300 placeholder-gray-500 transition-colors duration-200 bg-white text-gray-800"
                />

                <textarea
                name="message"
                placeholder="Escribe tu mensaje..."
                value={formData.message}
                onChange={handleChange}
                rows="4"
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-300 placeholder-gray-500 bg-white text-gray-800"
                ></textarea>

                <button
                type="submit"
                disabled={sending}
                className={`w-full font-bold py-2 rounded-lg transition duration-300 ${
                sending
                ? "bg-gray-400 cursor-not-allowed text-gray-200"
                : "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-md hover:shadow-lg"
                }`}
                >
                    {sending ? "Enviando..." : "Enviar"}
                    </button>
                    </form>
        </div>
    );
}