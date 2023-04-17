# DragAndDropCalculator

"Drag and Drop Calculator" is a calculator that has Drag and Drop functionality.

The functionality is provided with react-dnd library.

The goal of D&D functionality here is to provide user with ability to design calculator according to his or her taste.

Figma layout: https://www.figma.com/file/pdYzuOkvXY3Q00YRAMsLuz/Calculator-Constructor

Deploy: https://drag-and-drop-calculator-nemiok.vercel.app/

TECHNOLOGIES USED:
1. React
2. Typescript
3. SCSS
4. Redux-toolkit
5. Vite

TO START PROJECT: 
 1. `npm install`
 2. `npm run dev`

...IN PROGRESS...

## Правая **часть экрана - холст**

На холст можно бросать компоненты из палитры. Все элементы, брошенные на холст, располагаются вертикально.

При перетаскивании должна подсветиться зона, куда вставится элемент

Элемент удаляется с холста по dblclick

## **Сайдбар с набором компонентов**. Их всего 4:

- дисплей (на холсте он может находиться только в самом верху),
- цифровой блок с кнопками от `0` до `9` и `.` (дробь)
- кнопки операций: `x`, `/`, `+`, `-`
- и отдельно кнопка `=`

Все компоненты одинаковой ширины.

Каждый элемент можно бросить на холст только один раз, затем они становятся неактивными (визуально - opacity 50%).

## **Переключатель** между режимом Constructor и Runtime

- в режиме конструктора можно собирать интерфейс, но при нажатии на кнопки, они ничего не делают.
- в режиме runtime перетаскивать ничего нельзя (сайдбар скрывается), но работает калькулятор (или то что собрали). Нажимаем на кнопки и видим результат на дисплее.
- переключение сбрасывает состояние дисплея

## Стэк:

- TypeScript
- React
- Redux-toolkit
- SCSS
- Eslint
- Vite
