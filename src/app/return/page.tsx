import { redirect } from 'next/navigation'
import { stripe } from '@/lib/stripe'
import Navbar from '@/components/navbar'

interface ReturnPageProps {
  searchParams: { session_id?: string }
}

export default async function Return({ searchParams } : ReturnPageProps ) {
  const { session_id } = await searchParams
  if (!session_id)
    throw new Error('Please provide a valid session_id (`cs_test_...`)')

  const session = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ['line_items', 'payment_intent']
  })
  if (!session.customer_details || !session.customer_details.email) {
    throw new Error('Customer details or email not found.')
  }

  const customerEmail = session.customer_details.email

  if (session.status === 'open') {
    return redirect('/')
  }

  if (session.status === 'complete') {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center p-4">
        <main className="w-full max-w-4xl mt-4">
            <Navbar/>
            <div className='mt-6' />
            <section id="success">
                <p>
                Thank you for choosing us! Your order is confirmed, and a receipt 
                has been sent to {customerEmail}. Have questions? Reach out 
                to TODO@email.com.
                </p>
            </section>
        </main>
      </div>
    )
  }
}