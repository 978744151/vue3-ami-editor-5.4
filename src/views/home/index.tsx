import { defineComponent, ref } from 'vue' //必须有
import { useRouter } from 'vue-router'
export default defineComponent({
  setup() {
    const router = useRouter()
    const a = 1
    const handleMenuClick = () => {
      router.push({ path: `/editor` })
    }
    return {
      handleMenuClick
    }
  },
  render() {
    return (
      <div>
        <div onClick={this.handleMenuClick}>editor</div>
      </div>
    )
  }
})
