
  ```tsx
  await transport.sendMail({
    from: "Feedback <dev@feedget.com>",
    to: "Jady Rufio <jadyrufa@gmail.com>",
    subject: "new feedback",
    html: [  // aqui no html é interessante usar um array para criação de template do corpo do email
      `<div style="font-family: sans-serif; font-size: 16px; color: #111">`,
      `<p>Feedback type: ${type}</p>`,
      `<p>Comment: ${comment}</p>`,	
      `</div>`
    ].join("\n")
  })
  ```