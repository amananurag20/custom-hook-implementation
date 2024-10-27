# 🎣 useConfirm Custom Hook

<div align="left">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
</div>

A powerful and flexible React custom hook for creating confirmation dialogs with ease.

## 🌟 Features

- 🎨 **Customizable Confirmation Dialog**: Tailor the look and feel to match your app's design
- 🔄 **Reusable**: Use across different parts of your application effortlessly
- 🤝 **Callback Integration**: Execute actions only after user confirmation
- 🤞 **Promise-based API**: Clean and modern async/await syntax support

## 🚀 Quick Start

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/useConfirm-hook.git
cd useConfirm-hook
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

### Usage

1. Import the hook and the CustomModal component:

```typescript
import useConfirm from './hooks/useConfirm';
import CustomModal from './components/CustomModal';
```

2. Use the hook in your component:

```typescript
const [confirm, ConfirmationDialog] = useConfirm(CustomModal);
```

3. Create functions that use the `confirm` function:

```typescript
const handleSomeAction = async () => {
  try {
    await confirm({
      title: 'Confirm Action',
      message: 'Are you sure you want to perform this action?',
    });
    console.log('Action confirmed');
    // Proceed with the action
  } catch {
    console.log('Action canceled');
  }
};
```

4. Render the `ConfirmationDialog` component in your JSX:

```tsx
return (
  <div>
    <button onClick={handleSomeAction}>
      Perform Action
    </button>
    <ConfirmationDialog />
  </div>
);
```

## 🧩 Example Components

This project includes three example components demonstrating the use of the `useConfirm` hook:

1. **📋 TodoList**: Confirms before deleting a todo item
2. **👤 UserProfile**: Confirms before updating the user's profile
3. **⚙️ Settings**: Confirms before toggling dark mode

## 🎨 Customization

Modify the `CustomModal` component in `src/components/CustomModal.jsx` to change the appearance of the confirmation dialog.

## 🌓 Dark Mode

This project includes a dark mode feature. Toggle it using the button in the Settings component.

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/princesinghrajput">@prince-singh-rajput</a>
</p>
