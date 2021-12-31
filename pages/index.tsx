import type { NextPage } from 'next'
import Header from '../components/Header'
import Dashboard from '../components/Dashboard'
import CustomHead from '../components/CustomHead'
const Home: NextPage = () => {
  return (
    <div>
      <CustomHead title="Deepak's Blog" description="Homepage For Deepak's Blog" />
      <Header />
      <Dashboard />
    </div >
  )
}

export default Home
