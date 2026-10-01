# 🌴 monis.rent - Interactive Workspace Designer

A visual, interactive workspace builder designed for digital nomads and startups in Bali. Instead of scrolling through a boring product catalog, users can visually design their dream office setup (desks, chairs, monitors, accessories) and rent it with a single click.

---

## 🚀 Submission Checklist

- **Live URL:** https://monis-rent-three.vercel.app/
- **GitHub Repository:** https://github.com/van-surya/monis-rent
- **Collaborator Access:** ✅ `desent-bot` has been added as a collaborator with "Read" access.

---

## 🛠️ Tech Stack

- **Framework:** Next.js 16.3.8 (App Router) & React 19.2.8
- **Language:** TypeScript 5.x
- **Styling:** Tailwind CSS 4.x
- **Animations:** Framer Motion 13.4.6
- **Icons:** Lucide React 1.49.0
- **State Management:** React Context API
- **Linting:** ESLint 9.x with `eslint-config-next`
- **Compiler:** React Compiler (Babel Plugin 1.0.0)

---

## 💡 Approach & Tech Choices

### The Approach

The core requirement was to make the experience "cool, visual, and fun" rather than a standard e-commerce grid. To achieve this, I built a **"Stage Diorama"** concept. As users select items from the side panels, the workspace preview updates in real-time with smooth, contextual animations. This provides immediate visual gratification and makes the renting process feel like using a premium design tool rather than filling out a form.

### Tech Choices

- **Next.js 16 & React 19:** Chosen for the latest performance improvements, React Compiler support, and robust type-safe development. The App Router provides excellent structure and server-side capabilities.
- **Tailwind CSS 4:** The latest major version allowed for rapid, responsive styling with the new `@theme` directive and improved performance. It made maintaining the complex layout (glassmorphism, gradients, and responsive grids) much cleaner without bloated CSS files.
- **Framer Motion 13:** This was the most critical choice for the "fun" factor. It handles the spring physics, layout transitions, and staggered animations when items appear or disappear from the diorama, making the app feel alive and premium.
- **React Context API:** Kept the state management lightweight and localized. For an app of this scale, Context provides clean global state (selected items, totals, modal visibility) without the boilerplate overhead of Redux or Zustand.
- **React Compiler (Babel Plugin):** Enabled to automatically optimize re-renders and improve runtime performance without manual `useMemo`/`useCallback` overhead.

---

## 🔮 What I'd Improve with More Time

1. **True 3D Experience:** Upgrade the CSS-based diorama to a lightweight WebGL implementation (e.g., React Three Fiber) to allow users to rotate the workspace 360° and see realistic lighting/shadows.
2. **Backend & Payments:** Integrate a real database (PostgreSQL/Prisma) and a payment gateway (Stripe/Midtrans) to handle actual checkout processing and inventory tracking.
3. **Collaborative Sharing:** Add a "Share Setup" feature that generates a unique URL, allowing remote teams to collaborate on and approve a workspace setup together.
4. **Enhanced Accessibility (a11y):** Add comprehensive ARIA labels, screen reader support, and full keyboard navigation for the interactive diorama elements.
5. **Server Actions:** Leverage Next.js 16 Server Actions for the checkout flow to handle form submissions and order processing directly on the server, improving security and UX.

---

## 📦 Local Development Setup

If you want to run this project locally:

1. Clone the repository:
   ```bash
   git clone
   cd monis-rent
   ```
