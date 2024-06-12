'use client'

// import { faFile } from '@fortawesome/free-regular-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function About() {
  // const onSubmit = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault()
  //   const data = new FormData(e.currentTarget)
  //   console.log(data.get('test'))
  // }
  return (
    <section className="flex justify-center items-center p-5 min-h-screen">
      <div className="text-center md:w-1/2">
        {/* <h1 className="text-xl font-bold mb-5">Create</h1>
        <div className="border border-primary rounded flex">
          <div className="py-2 px-4">
            <FontAwesomeIcon icon={faFile} width={20} height={20} />
          </div>
          <div className="py-2 px-4 w-full">
            <form onSubmit={onSubmit}>
              <input
                name="test"
                className="block w-full bg-transparent outline-none"
              ></input>
            </form>
          </div>
        </div>
        <p className="text-sm text-center pt-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
          consequuntur laboriosam nulla maxime nemo accusamus aperiam distinctio
          quos cupiditate ullam sit blanditiis facere expedita modi aspernatur,
          quis veniam illo quaerat.
        </p> */}

        <h1 className="text-xl font-bold mb-5">About</h1>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem,
          molestiae rem? Pariatur aliquam nobis assumenda nihil porro quia
          maiores exercitationem debitis repellat libero. Aut odio similique
          inventore nostrum eveniet delectus consequuntur temporibus tenetur
          quis esse accusantium dolore dolor deleniti eligendi numquam, tempora
          libero sed pariatur porro corporis est labore. Ea, velit.
        </span>
      </div>
      \
    </section>
  )
}
