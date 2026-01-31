import logging
import os
from aiogram import Bot, Dispatcher, executor, types
from aiogram.contrib.fsm_storage.memory import MemoryStorage
from aiogram.dispatcher import FSMContext
from aiogram.dispatcher.filters.state import State, StatesGroup

# ⚠️ ВАЖНО: Используйте переменные окружения для токенов!
# Создайте файл .env или установите переменные окружения
API_TOKEN = os.getenv("BOT_TOKEN", "8550276694:AAFR6pky9nJyxCHRLWhJcsJnnsIROcSEXSg")
ADMIN_ID = int(os.getenv("ADMIN_ID", "8412853741"))

logging.basicConfig(level=logging.INFO)

bot = Bot(token=API_TOKEN)
dp = Dispatcher(bot, storage=MemoryStorage())

# ---------- STATES ----------
class Form(StatesGroup):
    fio = State()
    birth_date = State()
    snils = State()
    email = State()
    phone = State()
    program = State()
    course = State()
    direction = State()
    study_form = State()
    reason = State()

# ---------- KEYBOARDS ----------
program_kb = types.ReplyKeyboardMarkup(resize_keyboard=True, one_time_keyboard=True)
program_kb.add(
    "Бакалавриат",
    "Магистратура",
    "Аспирантура",
    "Специалитет",
    "Колледж"
)

study_form_kb = types.ReplyKeyboardMarkup(resize_keyboard=True, one_time_keyboard=True)
study_form_kb.add("Очная", "Очно-заочная", "Заочная")

reason_kb = types.ReplyKeyboardMarkup(resize_keyboard=True, one_time_keyboard=True)
reason_kb.add(
    "Постановка на воинский учет",
    "Подтверждение права на отсрочку от военной службы"
)

# ---------- START ----------
@dp.message_handler(commands=["start"], state="*")
async def start(message: types.Message, state: FSMContext):
    # Сбрасываем любое предыдущее состояние
    await state.finish()
    
    await Form.fio.set()
    await message.answer(
        "👋 Добро пожаловать!\n\n"
        "Для получения справки заполните анкету.\n\n"
        "Введите Фамилию Имя Отчество:"
    )

# ---------- FORM ----------
@dp.message_handler(state=Form.fio)
async def process_fio(message: types.Message, state: FSMContext):
    await state.update_data(fio=message.text)
    await Form.birth_date.set()
    await message.answer("Введите дату рождения (ДД.ММ.ГГГГ):")

@dp.message_handler(state=Form.birth_date)
async def process_birth_date(message: types.Message, state: FSMContext):
    # Можно добавить валидацию формата даты
    await state.update_data(birth_date=message.text)
    await Form.snils.set()
    await message.answer("Введите СНИЛС (например: 123-456-789 01):")

@dp.message_handler(state=Form.snils)
async def process_snils(message: types.Message, state: FSMContext):
    await state.update_data(snils=message.text)
    await Form.email.set()
    await message.answer("Введите E-mail:")

@dp.message_handler(state=Form.email)
async def process_email(message: types.Message, state: FSMContext):
    await state.update_data(email=message.text)
    await Form.phone.set()
    await message.answer("Введите телефон:")

@dp.message_handler(state=Form.phone)
async def process_phone(message: types.Message, state: FSMContext):
    await state.update_data(phone=message.text)
    await Form.program.set()
    await message.answer("Выберите программу обучения:", reply_markup=program_kb)

@dp.message_handler(state=Form.program)
async def process_program(message: types.Message, state: FSMContext):
    await state.update_data(program=message.text)
    await Form.course.set()
    await message.answer("Введите курс (например: 1, 2, 3...):", reply_markup=types.ReplyKeyboardRemove())

@dp.message_handler(state=Form.course)
async def process_course(message: types.Message, state: FSMContext):
    await state.update_data(course=message.text)
    await Form.direction.set()
    await message.answer("Введите направление подготовки / специальность:")

@dp.message_handler(state=Form.direction)
async def process_direction(message: types.Message, state: FSMContext):
    await state.update_data(direction=message.text)
    await Form.study_form.set()
    await message.answer("Выберите форму обучения:", reply_markup=study_form_kb)

@dp.message_handler(state=Form.study_form)
async def process_study_form(message: types.Message, state: FSMContext):
    await state.update_data(study_form=message.text)
    await Form.reason.set()
    await message.answer("Для чего нужна справка?", reply_markup=reason_kb)

# ---------- REASON (ФИНАЛ) ----------
@dp.message_handler(state=Form.reason)
async def process_reason(message: types.Message, state: FSMContext):
    # Проверяем, что выбран правильный вариант
    if message.text not in [
        "Постановка на воинский учет",
        "Подтверждение права на отсрочку от военной службы"
    ]:
        await message.answer(
            "❌ Пожалуйста, выберите вариант из предложенных кнопок ⬇️",
            reply_markup=reason_kb
        )
        return
    
    await state.update_data(reason=message.text)
    data = await state.get_data()

    # Формируем сообщение для админа
    admin_text = (
        "📥 <b>Новая заявка</b>\n\n"
        f"👤 <b>ФИО:</b> {data['fio']}\n"
        f"📅 <b>Дата рождения:</b> {data['birth_date']}\n"
        f"🆔 <b>СНИЛС:</b> {data['snils']}\n"
        f"📧 <b>Email:</b> {data['email']}\n"
        f"📱 <b>Телефон:</b> {data['phone']}\n"
        f"🎓 <b>Программа:</b> {data['program']}\n"
        f"📚 <b>Курс:</b> {data['course']}\n"
        f"🎯 <b>Направление:</b> {data['direction']}\n"
        f"📖 <b>Форма обучения:</b> {data['study_form']}\n"
        f"📄 <b>Цель:</b> {data['reason']}\n\n"
        f"👨‍🎓 <b>Telegram ID:</b> {message.from_user.id}\n"
        f"👤 <b>Username:</b> @{message.from_user.username or 'Не указан'}"
    )

    try:
        # Отправляем админу
        await bot.send_message(ADMIN_ID, admin_text, parse_mode="HTML")
        
        # Подтверждаем пользователю
        await message.answer(
            "✅ <b>Заявка успешно отправлена!</b>\n\n"
            "Ваша заявка принята в обработку. "
            "Ожидайте ответа от администратора.",
            reply_markup=types.ReplyKeyboardRemove(),
            parse_mode="HTML"
        )
    except Exception as e:
        logging.error(f"Ошибка отправки сообщения: {e}")
        await message.answer(
            "❌ Произошла ошибка при отправке заявки. "
            "Пожалуйста, попробуйте позже или обратитесь к администратору.",
            reply_markup=types.ReplyKeyboardRemove()
        )

    await state.finish()

# ---------- ОТМЕНА ----------
@dp.message_handler(commands=["cancel"], state="*")
async def cancel_handler(message: types.Message, state: FSMContext):
    current_state = await state.get_state()
    if current_state is None:
        await message.answer("Нечего отменять.")
        return

    await state.finish()
    await message.answer(
        "❌ Заполнение анкеты отменено.\n\n"
        "Для начала заново отправьте /start",
        reply_markup=types.ReplyKeyboardRemove()
    )

# ---------- HELP ----------
@dp.message_handler(commands=["help"])
async def help_handler(message: types.Message):
    await message.answer(
        "ℹ️ <b>Справка по использованию бота</b>\n\n"
        "/start - Начать заполнение анкеты\n"
        "/cancel - Отменить текущее заполнение\n"
        "/help - Показать эту справку\n\n"
        "Для получения справки просто заполните все поля анкеты.",
        parse_mode="HTML"
    )

# ---------- RUN ----------
if __name__ == "__main__":
    print("🤖 Бот запущен...")
    executor.start_polling(dp, skip_updates=True)