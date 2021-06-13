import React from 'react'

export const LinkCard = ({ link }) => {
  return (
    <>
      <h2>Ваше посилання</h2>

      <p>Посилання: <a href={link.to} target="_blank" rel="noopener noreferrer">{link.to}</a></p>
      <p>Ресурс: <a href={link.from} target="_blank" rel="noopener noreferrer">{link.from}</a></p>
      <p>Кількість переходів за посиланням: <strong>{link.clicks}</strong></p>
      <p>Дата створення: <strong>{new Date(link.date).toLocaleDateString()}</strong></p>
    </>
  )
}
