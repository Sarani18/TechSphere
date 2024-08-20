import { Avatar, Button, Dropdown, Navbar, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon, FaSun } from 'react-icons/fa';
import React from 'react';

export default function Header() {
  return (
    <Navbar className='border-b-2'>
      <div className='flex items-center justify-between w-full'>
        <Link
          to='/'
          className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'
        >
          <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
            Tech
          </span>
          Sphere
        </Link>
        <form className='flex-1 mx-4'>
          <TextInput
            type='text'
            placeholder='Search...'
            rightIcon={AiOutlineSearch}
            className='hidden lg:inline w-full'
          />
        </form>
        <Button className='w-12 h-10 lg:hidden' color='gray' pill>
          <AiOutlineSearch />
        </Button>
        <div className='flex items-center gap-2'>
          <Button className='w-12 h-10 hidden sm:inline' color='gray' pill>
            <FaMoon />
          </Button>
          <Link to='/Signin'>
            <Button gradientDuoTone='purpleToBlue' pill>
              Sign in
            </Button>
          </Link>
          <Navbar.Toggle />
        </div>
      </div>
      <Navbar.Collapse>
        <Navbar.Link>
          <Link to='/'>
            Home
          </Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link to='/about'>
            About
          </Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link to='/projects'>
            Projects
          </Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}