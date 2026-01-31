import logging
import os
from aiogram import Bot, Dispatcher, executor, types
from aiogram.contrib.fsm_storage.memory import MemoryStorage
from aiogram.dispatcher import FSMContext
from aiogram.dispatcher.filters.state import State, StatesGroup

# ⚠️ ВАЖНО: Используйте переменные окружения для токенов!
API_TOKEN = os.getenv("BOT_TOKEN", "8550276694:AAFR6pky9nJyxCHRLWhJcsJnnsIROcSEXSg")
ADMIN_ID = int(os.getenv("ADMIN_ID", "892271347"))

logging.basicConfig(level=logging.INFO)

bot = Bot(token=API_TOKEN)
dp = Dispatcher(bot, storage=MemoryStorage())

# ---------- STATES ----------
class MigrationAppointment(StatesGroup):
    specialist = State()
    citizenship = State()
    topic = State()
    fio = State()
    phone = State()
    email = State()
    preferred_date = State()
    preferred_time = State()
    comment = State()

# ---------- KEYBOARDS ----------
specialist_kb = types.ReplyKeyboardMarkup(resize_keyboard=True, one_time_keyboard=True)
specialist_kb.add("Бутова", "Грибовская")

# Популярные страны мигрантов в России
citizenship_kb = types.ReplyKeyboardMarkup(resize_keyboard=True, one_time_keyboard=True, row_width=2)
citizenship_kb.add(
    "🇺🇿 Узбекистан", "🇹🇯 Таджикистан",
    "🇰🇬 Киргизия", "🇰🇿 Казахстан",
    "🇦🇿 Азербайджан", "🇦🇲 Армения",
    "🇲🇩 Молдова", "🇺🇦 Украина",
    "🇧🇾 Беларусь", "🌍 Другая страна"
)

topic_kb = types.ReplyKeyboardMarkup(resize_keyboard=True, one_time_keyboard=True, row_width=1)
topic_kb.add(
    "📋 Регистрация по месту пребывания",
    "🛂 Оформление/продление РВП",
    "🏠 Оформление/продление ВНЖ",
    "💼 Разрешение на работу/патент",
    "🎓 Документы для учёбы",
    "👨‍👩‍👧 Воссоединение семьи",
    "🔄 Изменение миграционных данных",
    "❓ Консультация по миграции",
    "📄 Другой вопрос"
)

date_kb = types.ReplyKeyboardMarkup(resize_keyboard=True, one_time_keyboard=True, row_width=2)
date_kb.add(
    "Понедельник", "Вторник",
    "Среда", "Четверг",
    "Пятница", "Любой день"
)

time_kb = types.ReplyKeyboardMarkup(resize_keyboard=True, one_time_keyboard=True, row_width=2)
time_kb.add(
    "9:00-11:00", "11:00-13:00",
    "13:00-15:00", "15:00-17:00",
    "Любое время"
)

# ---------- START ----------
@dp.message_handler(commands=["start"], state="*")
async def start(message: types.Message, state: FSMContext):
    await state.finish()
    
    await MigrationAppointment.specialist.set()
    await message.answer(
        "👋 <b>Добро пожаловать!</b>\n\n"
        "🌍 Этот бот для записи иностранных граждан на консультацию по миграционным вопросам.\n\n"
        "📝 К какому специалисту вы хотите записаться?",
        reply_markup=specialist_kb,
        parse_mode="HTML"
    )

# ---------- ФОРМА ЗАПИСИ ----------
@dp.message_handler(state=MigrationAppointment.specialist)
async def process_specialist(message: types.Message, state: FSMContext):
    if message.text not in ["Бутова", "Грибовская"]:
        await message.answer(
            "❌ Пожалуйста, выберите специалиста кнопками ⬇️",
            reply_markup=specialist_kb
        )
        return
    
    await state.update_data(specialist=message.text)
    await MigrationAppointment.citizenship.set()
    await message.answer(
        f"✅ Специалист: <b>{message.text}</b>\n\n"
        "🌍 Укажите ваше <b>гражданство</b> (страну):",
        reply_markup=citizenship_kb,
        parse_mode="HTML"
    )

@dp.message_handler(state=MigrationAppointment.citizenship)
async def process_citizenship(message: types.Message, state: FSMContext):
    citizenship = message.text
    # Убираем флаги из текста для сохранения
    citizenship_clean = citizenship.split(" ", 1)[-1] if " " in citizenship else citizenship
    
    await state.update_data(citizenship=citizenship_clean)
    await MigrationAppointment.topic.set()
    await message.answer(
        f"✅ Гражданство: <b>{citizenship_clean}</b>\n\n"
        "📌 Выберите тему вашего вопроса:",
        reply_markup=topic_kb,
        parse_mode="HTML"
    )

@dp.message_handler(state=MigrationAppointment.topic)
async def process_topic(message: types.Message, state: FSMContext):
    await state.update_data(topic=message.text)
    await MigrationAppointment.fio.set()
    await message.answer(
        "📝 Введите ваше <b>ФИО</b> (Фамилия Имя Отчество):\n\n"
        "<i>Пример: Иванов Иван Иванович</i>",
        reply_markup=types.ReplyKeyboardRemove(),
        parse_mode="HTML"
    )

@dp.message_handler(state=MigrationAppointment.fio)
async def process_fio(message: types.Message, state: FSMContext):
    await state.update_data(fio=message.text)
    await MigrationAppointment.phone.set()
    await message.answer(
        "📱 Введите ваш <b>номер телефона</b>:\n\n"
        "<i>Пример: +7 999 123-45-67</i>",
        parse_mode="HTML"
    )

@dp.message_handler(state=MigrationAppointment.phone)
async def process_phone(message: types.Message, state: FSMContext):
    await state.update_data(phone=message.text)
    await MigrationAppointment.email.set()
    await message.answer(
        "📧 Введите ваш <b>E-mail</b>:\n\n"
        "<i>Или напишите <code>-</code> если нет</i>",
        parse_mode="HTML"
    )

@dp.message_handler(state=MigrationAppointment.email)
async def process_email(message: types.Message, state: FSMContext):
    email = message.text if message.text != "-" else "Не указан"
    await state.update_data(email=email)
    await MigrationAppointment.preferred_date.set()
    await message.answer(
        "📅 Выберите <b>удобный день</b> для визита:",
        reply_markup=date_kb,
        parse_mode="HTML"
    )

@dp.message_handler(state=MigrationAppointment.preferred_date)
async def process_date(message: types.Message, state: FSMContext):
    await state.update_data(preferred_date=message.text)
    await MigrationAppointment.preferred_time.set()
    await message.answer(
        "⏰ Выберите <b>удобное время</b>:",
        reply_markup=time_kb,
        parse_mode="HTML"
    )

@dp.message_handler(state=MigrationAppointment.preferred_time)
async def process_time(message: types.Message, state: FSMContext):
    await state.update_data(preferred_time=message.text)
    await MigrationAppointment.comment.set()
    await message.answer(
        "💬 Если хотите, добавьте <b>комментарий</b> или краткое описание вашей ситуации.\n\n"
        "📝 <i>Например: нужно продлить патент, истекает через 2 недели</i>\n\n"
        "Или напишите <code>-</code> чтобы пропустить.",
        reply_markup=types.ReplyKeyboardRemove(),
        parse_mode="HTML"
    )

@dp.message_handler(state=MigrationAppointment.comment)
async def process_comment(message: types.Message, state: FSMContext):
    comment = message.text if message.text != "-" else "Не указан"
    await state.update_data(comment=comment)
    
    data = await state.get_data()

    # Формируем сообщение для админа
    admin_text = (
        "📋 <b>НОВАЯ ЗАПИСЬ НА ПРИЁМ</b>\n"
        "━━━━━━━━━━━━━━━━━━━━━━\n\n"
        f"👤 <b>К специалисту:</b> {data['specialist']}\n\n"
        
        "<b>📊 ИНФОРМАЦИЯ О ЗАЯВИТЕЛЕ:</b>\n"
        f"🌍 <b>Гражданство:</b> {data['citizenship']}\n"
        f"📝 <b>ФИО:</b> {data['fio']}\n"
        f"📱 <b>Телефон:</b> {data['phone']}\n"
        f"📧 <b>E-mail:</b> {data['email']}\n\n"
        
        "<b>📌 ДЕТАЛИ ОБРАЩЕНИЯ:</b>\n"
        f"🗂 <b>Тема вопроса:</b> {data['topic']}\n"
        f"📅 <b>Предпочитаемый день:</b> {data['preferred_date']}\n"
        f"⏰ <b>Предпочитаемое время:</b> {data['preferred_time']}\n"
        f"💬 <b>Комментарий:</b> {data['comment']}\n\n"
        
        f"👨‍💼 <b>Telegram ID:</b> <code>{message.from_user.id}</code>\n"
        f"🔗 <b>Username:</b> @{message.from_user.username or 'не указан'}"
    )

    try:
        # Отправляем админу
        await bot.send_message(ADMIN_ID, admin_text, parse_mode="HTML")
        
        # Подтверждаем пользователю
        await message.answer(
            "✅ <b>Заявка успешно отправлена!</b>\n\n"
            f"📋 Вы записаны к специалисту: <b>{data['specialist']}</b>\n"
            f"📌 По теме: <b>{data['topic']}</b>\n"
            f"📅 Предпочитаемое время: <b>{data['preferred_date']}, {data['preferred_time']}</b>\n\n"
            "⏳ <b>Ожидайте звонка</b> для подтверждения точного времени приёма.\n\n"
            "📞 С вами свяжутся по указанному номеру телефона: {data['phone']}\n\n"
            "🔄 Чтобы записаться заново, отправьте /start",
            reply_markup=types.ReplyKeyboardRemove(),
            parse_mode="HTML"
        )
    except Exception as e:
        logging.error(f"Ошибка отправки сообщения: {e}")
        await message.answer(
            "❌ <b>Произошла ошибка при отправке заявки.</b>\n\n"
            "Пожалуйста, попробуйте позже или свяжитесь с нами напрямую:\n"
            f"📱 Позвоните по телефону или напишите администратору.\n\n"
            "🔄 Попробовать снова: /start",
            reply_markup=types.ReplyKeyboardRemove(),
            parse_mode="HTML"
        )

    await state.finish()

# ---------- ОТМЕНА ----------
@dp.message_handler(commands=["cancel"], state="*")
async def cancel_handler(message: types.Message, state: FSMContext):
    current_state = await state.get_state()
    if current_state is None:
        await message.answer("Нечего отменять. Для записи отправьте /start")
        return

    await state.finish()
    await message.answer(
        "❌ <b>Заполнение анкеты отменено.</b>\n\n"
        "🔄 Для новой записи отправьте /start",
        reply_markup=types.ReplyKeyboardRemove(),
        parse_mode="HTML"
    )

# ---------- HELP ----------
@dp.message_handler(commands=["help"])
async def help_handler(message: types.Message):
    await message.answer(
        "ℹ️ <b>ПОМОЩЬ ПО ИСПОЛЬЗОВАНИЮ БОТА</b>\n"
        "━━━━━━━━━━━━━━━━━━━━━━\n\n"
        
        "<b>🌍 Назначение бота:</b>\n"
        "Этот бот предназначен для записи иностранных граждан на консультацию "
        "по миграционным вопросам к специалистам Бутовой или Грибовской.\n\n"
        
        "<b>📋 Доступные команды:</b>\n"
        "/start - Начать запись на приём\n"
        "/cancel - Отменить текущую запись\n"
        "/help - Показать эту справку\n\n"
        
        "<b>❓ Какие вопросы можно решить:</b>\n"
        "• Регистрация по месту пребывания\n"
        "• Оформление РВП и ВНЖ\n"
        "• Разрешение на работу/патент\n"
        "• Документы для учёбы\n"
        "• Воссоединение семьи\n"
        "• Изменение миграционных данных\n"
        "• Общие консультации по миграции\n\n"
        
        "<b>📞 Что будет после записи:</b>\n"
        "После отправки заявки с вами свяжутся для подтверждения времени приёма.\n\n"
        
        "🔄 <b>Начать запись:</b> /start",
        parse_mode="HTML"
    )

# ---------- ИНФОРМАЦИЯ О СПЕЦИАЛИСТАХ ----------
@dp.message_handler(commands=["specialists"])
async def specialists_info(message: types.Message):
    await message.answer(
        "👥 <b>НАШИ СПЕЦИАЛИСТЫ</b>\n"
        "━━━━━━━━━━━━━━━━━━━━━━\n\n"
        
        "<b>📌 Бутова</b>\n"
        "Специализация: Миграционное законодательство, оформление документов\n\n"
        
        "<b>📌 Грибовская</b>\n"
        "Специализация: Консультации по миграции, регистрация\n\n"
        
        "🔄 <b>Записаться на приём:</b> /start",
        parse_mode="HTML"
    )

# ---------- RUN ----------
if __name__ == "__main__":
    print("🤖 Бот для записи мигрантов запущен...")
    print("🌍 Специалисты: Бутова, Грибовская")
    executor.start_polling(dp, skip_updates=True)